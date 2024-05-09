export function fetch_json(path: string) {
    const request = new XMLHttpRequest();
    request.open('GET', path, false);  // `false` makes the request synchronous
    request.send(null);
    if (request.status !== 200) {
      // handle an error here
      return
    }

    return JSON.parse(request.responseText);
}
export function fetch_text(path: string) {
    const request = new XMLHttpRequest();
    request.open('GET', path, false);  // `false` makes the request synchronous
    request.send(null);
    if (request.status !== 200) {
      // handle an error here
      return
    }

    return request.responseText;
}

const PROJECT_JSON = fetch_json('/projects.json');

export class Project {
    id: string;
    name: string;
    summary: string;
    background: string;
    description: boolean;
    homepage: string;
    sourceCode: string;
    curseforge: string;
    downloads: string;
    modrinth: string;
    planetMc: string;
    forgeDL: string;
    fabricDL: string;
    neoForgeDL: string;
    quiltDL: string;
    riftDL: string;
    rmlDL: string;
    babricDL: string;
    cursedLegacyFabricDL: string;
    modLoaderDL: string;
    forgeMCV: string;
    fabricMCV: string;
    neoForgeMCV: string;
    quiltMCV: string;
    riftMCV: string;
    rmlMCV: string;
    babricMCV: string;
    cursedLegacyFabricMCV: string;
    modLoaderMCV: string;
    deprecated: boolean = false;
    comingSoon: boolean = false;
    new: boolean = false;
    descriptionText: string;
    stage: "alpha" | "beta" | "release" = "release";
    sussy: boolean = false;
}

export class ProjectRef {
    id: string;
    name: string;
    summary: string;
    category: string;
    icon: string;
    game: string = "none";
}

export const PROJECTS: Array<ProjectRef> = PROJECT_JSON
