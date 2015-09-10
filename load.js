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
        this.forEach(this.elements, function(index, element)
        {
            load(element, url);
        });
    }
}(basic));
