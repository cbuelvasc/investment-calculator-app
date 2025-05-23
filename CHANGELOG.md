# 1.0.0 (2025-05-22)


* :pencil: (Update CHANGELOG.md to reflect recent enhancements in GitFlow and semantic-release integration) - Modified package.json to include new dependencies and scr… ([ab6a65e](https://github.com/cbuelvasc/investment-calculator-app/commit/ab6a65ed9ae1f223e445a9cd954fe969687b2dda))


### BREAKING CHANGES

* - Modified package.json to include new dependencies and scripts.

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Implementación de GitFlow con Git Emoji para gestión de ramas y commits
- Configuración de versionado semántico automático con semantic-release
- Integración de semantic-release en el flujo de trabajo de GitHub Actions
- Documentación detallada sobre el flujo de trabajo de desarrollo en README.md

### Changed
- Actualizado package.json con nuevas dependencias y scripts para commit y release
- Mejorado .gitignore con reglas para archivos de semantic-release y GitFlow

### CI/CD
- Optimizado flujo de trabajo de CI/CD en GitHub Actions:
  - Reordenado job de Semantic Release para ejecutarse antes del despliegue Docker
  - Añadida configuración para etiquetar imágenes Docker con la nueva versión semántica
  - Mejorada la captura y uso de la versión generada entre jobs del workflow
- Implementada actualización automática del CHANGELOG:
  - Agregado archivo .releaserc.json para configurar semantic-release
  - Configurada integración entre Git Emoji y generación de notas de versión
  - Habilitada generación automática de entradas en CHANGELOG basadas en mensajes de commit

## [1.0.0] - 2025-05-21

### Changed
- Added CHANGELOG.md to document project updates
  - Created CHANGELOG.md to track all notable changes to the Investment Calculator app
  - Followed the format based on Keep a Changelog and Semantic Versioning
  - Documented initial project structure and key features added in version 1.0.0

### Added
- Enhanced README and GitHub Actions workflow documentation (ae8e1aa)
- GitHub Container Registry instructions in README (1c29733)
- Updated GitHub Actions workflow with permissions (ab97ef1)
- GitHub Actions workflow for CI/CD pipeline (ace1792)
- Docker support with Dockerfile for containerization
- Responsive design with CSS
- Investment calculation logic in util/investment.js
- React components for user input and results display
- Initial project structure for Investment Calculator app (99f5449)
- CHANGELOG.md file to track all changes to the project
