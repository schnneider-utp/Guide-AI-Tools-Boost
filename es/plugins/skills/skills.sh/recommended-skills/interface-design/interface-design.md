# Interface Design Skill

La skill **Interface Design** es una guía detallada y estructurada para agentes de IA enfocada en la creación de interfaces de alta calidad, evitando el uso de "defaults" genéricos.

## 🌟 ¿Qué hace?
Esta skill guía a la IA para que diseñe componentes e interfaces pensando desde la intención y el dominio del producto, logrando diseños más personalizados y con mejor usabilidad. Está especialmente dirigida a **dashboards, paneles de administración, aplicaciones SaaS, herramientas y páginas de configuración**.

No está enfocada en marketing o landing pages.

## ⚙️ ¿Cómo funciona?
La skill impone un marco de trabajo que la IA debe seguir antes y durante la codificación:
1. **Intención antes que código**: Obliga a la IA a definir quién es el usuario, qué necesita hacer y cómo debe sentirse la plataforma, antes de sugerir diseños.
2. **Exploración de Dominio**: Genera vocabularios, paletas de colores asociadas al mundo físico del producto y firmas visuales únicas.
3. **Jerarquía Visual y "Craft"**: Establece reglas estrictas sobre tipografía, elevación de superficies (depth/borders), espaciados, y prevención de colores aleatorios sin sentido semántico.
4. **Guardado en Sistema**: Al terminar una tarea, la IA puede guardar estos patrones de diseño en un archivo `.interface-design/system.md` para asegurar la consistencia futura a lo largo de todo el proyecto.

## 🚀 ¿En qué puede mejorar tu proyecto?
- **Evita interfaces aburridas o repetitivas**: En lugar de la típica plantilla, la IA creará diseños que respiran la identidad de tu producto específico.
- **Microinteracciones y estados completos**: Garantiza la presencia de estados `hover`, `focus`, `active`, `disabled`, `loading`, etc.
- **Consistencia Total**: Al definir e iterar sobre tokens de colores y tipografía específicos, todos tus componentes encajarán a la perfección, logrando acabados de alta calidad profesional ("craft").
- **Mejores Modos Claros/Oscuros**: Establece reglas precisas sobre cómo manejar la jerarquía visual en diferentes modos (ej. bordes sutiles vs sombras).

## 🛠️ Instalación y Enlaces Oficiales

Para instalar esta skill en tu proyecto a través de `skills.sh`, utiliza el siguiente comando:

```bash
npx skills add https://github.com/dammyjay93/interface-design --skill interface-design
```

- **Repositorio de GitHub:** [dammyjay93/interface-design](https://github.com/dammyjay93/interface-design)
- **Documentación Oficial:** [interface-design.dev](https://interface-design.dev/index.html)