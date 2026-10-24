import { tegami } from "tegami";
import { runCli } from "tegami/cli";
import { github } from "tegami/plugins/github";

const paper = tegami({
  // Release notes come from conventional commits since the last tag. The
  // commit scope picks the package, so `fix(tsmd): ...` releases a patch.
  conventionalCommits: true,
  npm: {
    // npm (Node 24 ships npm 11) supports trusted publishing via OIDC.
    client: "npm",
    updateLockFile: false,
  },
  plugins: [
    github({
      repo: "meesvandongen/tsmd",
      // The release workflow commits the version bump to main itself.
      versionPr: false,
    }),
  ],
});

await runCli(paper);
