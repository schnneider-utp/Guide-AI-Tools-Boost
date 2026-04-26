# JWT Security Skill

La skill **JWT Security** transforma a tu agente de IA en un experto en la implementación segura de JSON Web Tokens (JWT) para la autenticación y autorización en tus sistemas backend, evitando vulnerabilidades catastróficas comunes.

## 🌟 ¿Qué hace?
Proporciona las pautas definitivas y reglas estrictas que el agente debe seguir al generar, firmar, validar y almacenar tokens JWT, cubriendo desde la estructura del *Payload* hasta los algoritmos criptográficos más seguros disponibles.

## ⚙️ ¿Cómo funciona?
La skill funciona como un supervisor estricto cada vez que la IA escribe código relacionado con inicio de sesión o sesiones web:
1. **Validaciones Forzosas**: Instruye a la IA para que siempre valide los tokens en el servidor (incluyendo caducidad `exp`, emisores `iss` y audiencias `aud`) y NUNCA acepte el temido algoritmo `none` o algoritmos sin listas blancas (whitelisting).
2. **Algoritmos Asimétricos (RS256/ES256)**: Recomienda el uso de pares de claves pública/privada para firmar tokens en vez de cadenas secretas débiles (HS256).
3. **Mecanismos de Rotación y Refresco**: Enseña cómo implementar correctamente los *Refresh Tokens* (rotación por uso, listas de revocación) y el soporte para cambiar claves sin desconectar a los usuarios (`kid` - Key ID).
4. **Almacenamiento Seguro**: Exige la configuración de cookies `HttpOnly` para entornos de navegador en lugar de depender del vulnerable `localStorage`.

## 🚀 ¿En qué puede mejorar tu proyecto?
- **Mitigación de Ataques Comunes**: Previene de inmediato ataques de confusión de algoritmos, debilidad de claves secretas y vulnerabilidades de robo de sesión a través de XSS (Cross-Site Scripting).
- **Código Backend Profesional**: Ya sea que uses Node.js (Express), Python u otro lenguaje, el agente implementará middleware de protección de rutas sólido como una roca.
- **Mantenibilidad a Largo Plazo**: Al soportar *JWKS* (JSON Web Key Sets), tu sistema de autenticación podrá rotar sus credenciales en el futuro sin provocar interrupciones en los servicios de los usuarios.

## 🛠️ Instalación y Enlaces Oficiales

Para instalar esta skill en tu proyecto a través de `skills.sh`, utiliza el siguiente comando:

```bash
npx skills add https://github.com/mindrally/skills --skill jwt-security
```

- **Repositorio de GitHub:** [mindrally/skills](https://github.com/mindrally/skills)