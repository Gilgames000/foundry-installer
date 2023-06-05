'use strict';

import * as fs from "fs";
import dedent from "dedent";


const executableTemplate = dedent`
#!/usr/bin/env sh

EXECUTABLE_PATH
`;

!fs.existsSync('./bin') && fs.mkdirSync('./bin');

fs.writeFileSync('./bin/forge', executableTemplate);
fs.chmodSync('./bin/forge', '755');

fs.writeFileSync('./bin/anvil', executableTemplate);
fs.chmodSync('./bin/anvil', '755');

fs.writeFileSync('./bin/cast', executableTemplate);
fs.chmodSync('./bin/cast', '755');
