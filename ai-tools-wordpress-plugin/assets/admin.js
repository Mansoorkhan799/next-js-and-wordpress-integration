/* AI Tools Platform Plugin - Admin JavaScript */

jQuery(document).ready(function($) {
    'use strict';
    
    // Form validation
    $('#ai_tool_details').on('submit', function(e) {
        var category = $('#tool_category').val();
        var downloadUrl = $('#download_url').val();
        
        if (!category) {
            alert('Please select a tool category.');
            $('#tool_category').focus();
            e.preventDefault();
            return false;
        }
        
        if (!downloadUrl) {
            alert('Please enter a download URL.');
            $('#download_url').focus();
            e.preventDefault();
            return false;
        }
        
        // Validate URL format
        try {
            new URL(downloadUrl);
        } catch (error) {
            alert('Please enter a valid URL (e.g., https://example.com).');
            $('#download_url').focus();
            e.preventDefault();
            return false;
        }
    });
    
    // Auto-generate slug from title
    $('#title').on('blur', function() {
        var title = $(this).val();
        var slug = title.toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim('-');
        
        if ($('#post_name').length && !$('#post_name').val()) {
            $('#post_name').val(slug);
        }
    });
    
    // Rating input validation
    $('#tool_rating').on('input', function() {
        var rating = parseFloat($(this).val());
        if (rating < 1) {
            $(this).val(1);
        } else if (rating > 5) {
            $(this).val(5);
        }
    });
    
    // Features textarea helper
    $('#tool_features').on('blur', function() {
        var features = $(this).val();
        if (features && !features.includes(',')) {
            // Suggest comma separation
            var suggestion = features.replace(/\n/g, ', ');
            if (confirm('Would you like to format the features as a comma-separated list?')) {
                $(this).val(suggestion);
            }
        }
    });
    
    // Icon preview
    $('#tool_icon').on('input', function() {
        var icon = $(this).val();
        if (icon) {
            // Create or update preview
            var preview = $('#icon-preview');
            if (preview.length === 0) {
                $(this).after('<div id="icon-preview" style="margin-top: 5px; font-size: 24px;"></div>');
                preview = $('#icon-preview');
            }
            preview.text(icon);
        }
    });
    
    // Category-specific suggestions
    $('#tool_category').on('change', function() {
        var category = $(this).val();
        var suggestions = {
            'Productivity': 'Task management, Automation, Time tracking, Project management',
            'Creative': 'Image generation, Video editing, Music creation, Design tools',
            'Writing': 'Grammar check, Content generation, Translation, Proofreading',
            'Design': 'UI/UX design, Logo creation, Color palettes, Layout tools',
            'Development': 'Code generation, Debugging, Testing, Documentation'
        };
        
        if (suggestions[category]) {
            var featuresField = $('#tool_features');
            if (!featuresField.val()) {
                featuresField.attr('placeholder', suggestions[category]);
            }
        }
    });
    
    // Auto-save draft functionality
    var autoSaveTimer;
    $('input, textarea, select').on('change', function() {
        clearTimeout(autoSaveTimer);
        autoSaveTimer = setTimeout(function() {
            if ($('#auto-save').length === 0) {
                $('#publish').after('<span id="auto-save" style="color: #646970; font-size: 12px; margin-left: 10px;">Auto-saving...</span>');
            }
            
            // Trigger WordPress auto-save
            if (typeof wp !== 'undefined' && wp.autosave) {
                wp.autosave.server.triggerSave();
            }
            
            setTimeout(function() {
                $('#auto-save').remove();
            }, 2000);
        }, 2000);
    });
    
    // Quick actions
    $('.ai-tools-quick-actions').on('click', 'button', function(e) {
        e.preventDefault();
        var action = $(this).data('action');
        
        switch(action) {
            case 'preview':
                var previewUrl = $('#preview-post').attr('href');
                if (previewUrl) {
                    window.open(previewUrl, '_blank');
                }
                break;
            case 'duplicate':
                if (confirm('Create a duplicate of this AI tool?')) {
                    // Duplicate functionality would go here
                    alert('Duplicate functionality coming soon!');
                }
                break;
        }
    });
    
    // Tool status indicator
    function updateToolStatus() {
        $('.ai-tool-row').each(function() {
            var row = $(this);
            var category = row.find('.tool-category').text();
            var rating = parseFloat(row.find('.tool-rating').text());
            
            var status = 'inactive';
            if (category && rating >= 3.0) {
                status = 'active';
            }
            
            row.find('.tool-status').removeClass('active inactive').addClass(status);
        });
    }
    
    // Initialize on page load
    updateToolStatus();
    
    // Help tooltips
    $('[data-tooltip]').hover(
        function() {
            var tooltip = $(this).data('tooltip');
            $(this).append('<div class="ai-tools-tooltip">' + tooltip + '</div>');
        },
        function() {
            $('.ai-tools-tooltip').remove();
        }
    );
    
    // Form field dependencies
    $('#tool_pricing').on('change', function() {
        var pricing = $(this).val();
        if (pricing === 'Free') {
            $('#tool_rating').closest('tr').hide();
        } else {
            $('#tool_rating').closest('tr').show();
        }
    });
    
    // Initialize field dependencies
    $('#tool_pricing').trigger('change');
    
    // Export functionality
    $('#export-ai-tools').on('click', function(e) {
        e.preventDefault();
        
        var selectedTools = [];
        $('input[name="post[]"]:checked').each(function() {
            selectedTools.push($(this).val());
        });
        
        if (selectedTools.length === 0) {
            alert('Please select at least one AI tool to export.');
            return false;
        }
        
        // Create export data
        var exportData = {
            action: 'export_ai_tools',
            tools: selectedTools,
            nonce: $('#ai_tools_nonce').val()
        };
        
        // Submit export request
        $.post(ajaxurl, exportData, function(response) {
            if (response.success) {
                // Download the exported file
                var link = document.createElement('a');
                link.href = response.data.url;
                link.download = 'ai-tools-export.json';
                link.click();
            } else {
                alert('Export failed: ' + response.data.message);
            }
        });
    });
    
    // Import functionality
    $('#import-ai-tools').on('change', function() {
        var file = this.files[0];
        if (!file) return;
        
        var reader = new FileReader();
        reader.onload = function(e) {
            try {
                var data = JSON.parse(e.target.result);
                
                if (confirm('Import ' + data.tools.length + ' AI tools?')) {
                    var importData = {
                        action: 'import_ai_tools',
                        data: data,
                        nonce: $('#ai_tools_nonce').val()
                    };
                    
                    $.post(ajaxurl, importData, function(response) {
                        if (response.success) {
                            alert('Successfully imported ' + response.data.count + ' AI tools!');
                            location.reload();
                        } else {
                            alert('Import failed: ' + response.data.message);
                        }
                    });
                }
            } catch (error) {
                alert('Invalid file format. Please select a valid AI tools export file.');
            }
        };
        reader.readAsText(file);
    });
    
    // API Test functionality
    window.testAPI = function() {
        var resultDiv = document.getElementById('api-test-result');
        if (!resultDiv) return;
        
        resultDiv.innerHTML = '<p>Testing...</p>';
        
        fetch(window.location.origin + '/wp-json/wp/v2/ai_tools')
            .then(response => response.json())
            .then(data => {
                resultDiv.innerHTML = '<p style="color: green;">✅ API is working! Found ' + data.length + ' AI tools.</p>';
            })
            .catch(error => {
                resultDiv.innerHTML = '<p style="color: red;">❌ API Error: ' + error.message + '</p>';
            });
    };
});
