RebuildConstants = {
    REBUILD_MESSAGE_OVERRIDE: undefined
}

// noinspection JSCheckFunctionSignatures
let versions = {
    data: {
        css: {
            main: window.getComputedStyle(document.body).getPropertyValue("--version-data-css-main").trim(" ").slice(1,-1),
            site: window.getComputedStyle(document.body).getPropertyValue("--version-data-css-site").trim(" ").slice(1,-1),
            properties: window.getComputedStyle(document.body).getPropertyValue("--version-data-css-properties").trim(" ").slice(1,-1)
        }
    },
    downloads: {
        bubble_blaster: window.getComputedStyle(document.body).getPropertyValue("--version-downloads-bubbleblaster").trim(" ").slice(1,-1)
    },
    index: window.getComputedStyle(document.body).getPropertyValue("--version-index").trim(" ").slice(1,-1)
};
// let expectedVersions = {
//     data: {
//         css: {
//             main: "2021.8.22.23.52",
//             site: "2022.5.22.17.15"
//         }
//     },
//     downloads: {
//         bubble_blaster: "2022.5.22.17.15"
//     },
//     index: "2022.5.22.17.15"
// };

console.log("Current versions: ", versions)
console.log("Expected versions: ", expectedVersions)

let beingRebuilt = false;

if (RebuildConstants.REBUILD_MESSAGE_OVERRIDE === undefined || !(typeof(RebuildConstants.REBUILD_MESSAGE_OVERRIDE) === "boolean")) {
    if (versions.data.css.main.length === 0) {
        console.log("Version is not available (data/css/main):", versions.data.css.main)
    } else if (versions.data.css.main === expectedVersions.data.css.main) {
        console.log("Versions are the same (data/css/main): ", versions.data.css.main, expectedVersions.data.css.main)
    } else {
        console.log("Versions are different (data/css/main): ", versions.data.css.main, expectedVersions.data.css.main)
        beingRebuilt = true;
    }

    if (versions.data.css.site.length === 0) {
        console.log("Version is not available (data/css/site):", versions.data.css.site)
    } else if (versions.data.css.site === expectedVersions.data.css.site) {
        console.log("Versions are the same (data/css/site): ", versions.data.css.site, expectedVersions.data.css.site)
    } else {
        console.log("Versions are different (data/css/site): ", versions.data.css.site, expectedVersions.data.css.site)
        beingRebuilt = true;
    }

    if (versions.downloads.bubble_blaster.length === 0) {
        console.log("Version is not available (Downloads/BubbleBlaster):", versions.downloads.bubble_blaster)
    } else if (versions.downloads.bubble_blaster === expectedVersions.downloads.bubble_blaster) {
        console.log("Versions are the same (Downloads/BubbleBlaster):", versions.downloads.bubble_blaster, expectedVersions.downloads.bubble_blaster)
    } else {
        console.log("Versions are different (Downloads/BubbleBlaster):", versions.downloads.bubble_blaster, expectedVersions.downloads.bubble_blaster)
        beingRebuilt = true;
    }

    if (versions.index.length === 0) {
        console.log("Version is not available (index):", versions.index)
    } else if (versions.index === expectedVersions.index) {
        console.log("Versions are the same (index): ", versions.index, expectedVersions.index)
    } else {
        console.log("Versions are different (index): ", versions.index, expectedVersions.index)
        beingRebuilt = true;
    }
    if (beingRebuilt) {
        console.warn("Site is being rebuilt.")
    }
} else {
    beingRebuilt = RebuildConstants.REBUILD_MESSAGE_OVERRIDE
    console.warn("Rebuild message has been overridden, value is", RebuildConstants.REBUILD_MESSAGE_OVERRIDE)
}

if (beingRebuilt) {
    let rebuildElem = document.getElementById("Rebuild");
    rebuildElem.classList.add("Active")
    document.body.classList.add("BeingRebuilt")
    document.body.style.setProperty("overflow", "hidden")
    document.styleSheets[0].insertRule("* {-webkit-user-select: none !important; -moz-user-select: none; -ms-user-select: none; user-select: none}")
}
