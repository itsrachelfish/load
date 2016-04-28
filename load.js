// Check how the plugin should be exported
(function(factory)
{
    if(typeof module === 'object' && module.exports)
    {
        // We're in Node or a CommonJS compatable environment
        factory(require('wetfish-basic'));
    }
    else if(typeof define === 'function' && define.amd)
    {
        // We're in a browser being loaded with AMD (Require.js)
        define(['wetfish-basic'], factory);
    }
    else
    {
        // We're in a browser, so assume everything has been loaded as global variables
        factory(basic);
    }
}
(function($)
{
    var load = function(element, url)
    {
        fetch(url).then(function(response)
        {
            response.text().then(function(text)
            {
                $(element).html(text);
            });
        });
    }

    // Wetfish basic wrapper
    $.prototype.load = function(url)
    {
        this.forEach(this.elements, function(element)
        {
            load(element, url);
        });
    }
}));
