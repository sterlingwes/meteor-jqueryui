Package.describe({
    summary: "Custom jQueryUI build (tooltip,sortable,datepicker)"
});

Package.on_use(function(api) {
    
    api.use('jquery');
    
    api.add_files([
        'client/lib/jqueryui.js',
        'client/css/jqueryui.css',

        'client/lib/jqueryuzi-dtpicker.js',
        'client/css/jqueryuzi-dtpicker.css'
        
    ],'client');
    
});