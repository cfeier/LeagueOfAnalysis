System.register(['@angular/platform/browser', "./app.component", "@angular/router", "@angular/http"], function(exports_1) {
    var browser_1, app_component_1, router_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            //noinspection TypeScriptValidateTypes
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS]);
        }
    }
});