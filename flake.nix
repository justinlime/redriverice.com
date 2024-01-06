{
  description = "Managrr";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }: 
    let
      forAllSystems = function:
        nixpkgs.lib.genAttrs [
          "x86_64-linux"
          "x86_64-darwin"
          "aarch64-linux"
        ] (system:
          function (import nixpkgs {
            inherit system;
          }));
    in {
      devShells = forAllSystems (pkgs: {
        default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_20  
          ];
          shellHook = ''
            cd ./src
            npm install
            cd ../..
            clear
            echo "DevShell Activated"
          '';
        };
        webserver = pkgs.mkShell {
          shellHook = ''
            cd ./src
            npm install
            npm run dev
          '';
        };
      });
    };
}
