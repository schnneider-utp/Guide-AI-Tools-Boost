# JWT Security Skill

The **JWT Security** skill transforms your AI agent into an expert in the secure implementation of JSON Web Tokens (JWT) for authentication and authorization in your backend systems, avoiding common catastrophic vulnerabilities.

## 🌟 What does it?
Provides the definitive guidelines and strict rules that the AI must follow when generating, signing, validating, and storing JWT tokens, covering from the *Payload* structure to the most secure cryptographic algorithms available.

## ⚙️ How does it work?
The skill works as a strict supervisor every time the AI writes login or session-related code:
1. **Forced Validations**: Instructs the AI to always validate tokens on the server (including expiration `exp`, issuers `iss`, and audiences `aud`) and NEVER accept the dreaded `none` algorithm or algorithms without whitelisting.
2. **Asymmetric Algorithms (RS256/ES256)**: Recommends the use of public/private key pairs to sign tokens instead of weak secret strings (HS256).
3. **Rotation and Refresh Mechanisms**: Teaches how to correctly implement *Refresh Tokens* (rotation on use, revocation lists) and the support to change keys without disconnecting users (`kid` - Key ID).
4. **Secure Storage**: Requires `HttpOnly` cookie configuration for browser environments instead of depending on vulnerable `localStorage`.

## 🚀 How can it improve your project?
- **Mitigation of Common Attacks**: Immediately prevents algorithm confusion attacks, weak secret key vulnerabilities, and session theft vulnerabilities through XSS (Cross-Site Scripting).
- **Professional Backend Code**: Whether you use Node.js (Express), Python, or another language, the agent will implement solid route protection middleware like a rock.
- **Long-Term Maintainability**: By supporting *JWKS* (JSON Web Key Sets), your authentication system will be able to rotate its credentials in the future without causing service interruptions to users.

## 🛠️ Installation & Official Links

To install this skill in your project through `skills.sh`, use the following command:

```bash
npx skills add https://github.com/mindrally/skills --skill jwt-security
```

- **GitHub Repository:** [mindrally/skills](https://github.com/mindrally/skills)