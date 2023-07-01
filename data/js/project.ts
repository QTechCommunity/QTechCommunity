(function () {
    function replaceElements(className: string, content: string) {
        var elements: HTMLCollectionOf<Element> = document.getElementsByClassName(className)
        for (var i: number = 0; i < elements.length; i++) {
            var element = elements[i]
            element.textContent = content
        }
    }

    function replaceLinkElements(className: string, content: string) {
        var elements: HTMLCollectionOf<Element> = document.getElementsByClassName(className)
        for (var i: number = 0; i < elements.length; i++) {
            var element = elements[i]
            element.setAttribute("href", content)
        }
    }

    var projectId = window.location.hash
    
    function Get(yourUrl){
        var Httpreq = new XMLHttpRequest(); // a new request
        Httpreq.open("GET",yourUrl,false);
        Httpreq.send(null);
        return Httpreq.responseText;          
    }

    var projectsJson = JSON.parse(Get("data/projects.json"));
    var project = projectsJson[projectId]
    var projectName = project.name

    replaceElements("ReplaceMe-ProjectName", projectName)
    replaceLinkElements("ReplaceMe-Links-CurseForge", project.links.curseforge)
    replaceLinkElements("ReplaceMe-Links-Modrinth", project.links.modrinth)
}())