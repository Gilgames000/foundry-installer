'use strict';

import * as foundryup from "@foundry-rs/easy-foundryup";
import * as fs from "fs";
import dedent from "dedent";
import { execSync } from "child_process";
import { join } from "path";


(async () => {
    try {
        console.log("Installing foundryup");
        await foundryup.selfInstall();
    } catch (e) {
        console.error(e);
    }

    const foundryupDir = foundryup.foundryBinDir();
    try {
        console.log("Running foundryup to install latest foundry version");
        execSync(join(foundryupDir, "foundryup"), { stdio: "inherit" });
    } catch (e) {
        console.error(e);
    }

    const executableTemplate = dedent`
    #!/usr/bin/env sh

    EXECUTABLE_PATH
    `;

    console.log("Writing executables to ./bin");

    try {
        !fs.existsSync('./bin') && fs.mkdirSync('./bin');

        const forgePath = join(foundryupDir, "forge");
        const anvilPath = join(foundryupDir, "anvil");
        const castPath = join(foundryupDir, "cast");

        fs.writeFileSync('./bin/forge', executableTemplate.replace('EXECUTABLE_PATH', forgePath));
        fs.chmodSync('./bin/forge', '755');

        fs.writeFileSync('./bin/anvil', executableTemplate.replace('EXECUTABLE_PATH', anvilPath));
        fs.chmodSync('./bin/anvil', '755');

        fs.writeFileSync('./bin/cast', executableTemplate.replace('EXECUTABLE_PATH', castPath));
        fs.chmodSync('./bin/cast', '755');
    } catch (e) {
        console.error(`Error while writing executables: ${e}`);
    }
})();
