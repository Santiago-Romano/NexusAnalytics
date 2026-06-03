English:

What is it for? 
Nexus Analytics is a business monitoring platform designed to provide executives and managers with a consolidated view of organizational performance. 
It allows access to key metrics and real-time visual reports from a single interface, reducing reliance on spreadsheets and manual reporting.

How does it work? 
The application is organized into three main areas. 
On the left is a navigation menu with modules such as Analytics, Reports, Customers, and Sales, simulating the structure of a real business platform. 
At the top is a status bar with real-time update indicators. 

The main dashboard presents information at four levels: 
- Strategic KPIs: revenue, active customers, conversion rate, and NPS, accompanied by visual trend indicators.
- Financial analysis: a comparative chart of revenue and expenses to evaluate the monthly evolution of the business.
- Channel distribution: visualization of sales sources through a pie chart.
- Operational activity: a table of recent contracts and a chronological record of relevant events within the organization.

Notice: This project was developed for educational and demonstration purposes.
All data, metrics, company names, clients, contracts, and statistics displayed within the application are entirely fictitious and were created solely to illustrate the platform's functionality.
Nexus Analytics does not use real information and has no affiliation with any existing company, organization, or individual.
Any resemblance to real entities is purely coincidental.

Here is the link to the page so you can try it out:
https://nexusanalitycs.netlify.app/

Español:

Descripción General:
Nexus Analytics es una plataforma de monitoreo empresarial interactiva y responsiva, diseñada para proporcionar a directivos y gerentes una visión consolidada y en tiempo real del rendimiento organizacional. Su objetivo es centralizar métricas clave y reportes visuales en una única interfaz, minimizando la dependencia de hojas de cálculo y procesos de reporte manuales. Este proyecto demuestra la capacidad de construir interfaces de usuario complejas y funcionales, con un enfoque en la visualización de datos y la interactividad.

Características Destacadas:

- Dashboard Interactivo: Presentación de KPIs estratégicos (ingresos, clientes activos, tasa de conversión, NPS) con indicadores visuales de tendencia.

- Visualización de Datos: Gráficos SVG para análisis financiero (ingresos vs. gastos) y distribución de canales de venta (gráfico circular).

- Gestión de Contratos: Tabla dinámica de contratos recientes con funcionalidad de detalle mediante un modal interactivo.

- Feed de Actividad: Registro cronológico de eventos operativos con filtros por categoría.

- Filtros de Tiempo: Opciones para visualizar datos por períodos (7, 30, 90 días, 1 año) con actualización dinámica de los KPIs.

- Notificaciones Toast: Sistema de feedback visual para las interacciones del usuario.

- Navegación Responsiva: Sidebar de navegación adaptable, con menú tipo hamburger para dispositivos móviles, asegurando una experiencia de usuario consistente en cualquier tamaño de pantalla.

- Reloj en Tiempo Real: Indicador de última actualización con un reloj que se actualiza cada segundo, simulando datos en vivo.



Stack Tecnológico:
Este proyecto fue desarrollado utilizando un stack de frontend puro, demostrando un dominio profundo de las tecnologías web fundamentales:

- HTML5: Estructuración semántica del contenido.

- CSS3: Estilización avanzada, incluyendo variables CSS, animaciones, transiciones y un sistema de diseño responsivo basado en media queries para una adaptación fluida a diversos dispositivos.

- JavaScript (ES6+): Implementación de toda la lógica interactiva, manipulación del DOM, gestión de eventos, y simulación de funcionalidades de backend (filtros, modales, actualizaciones de datos).



Arquitectura de Datos y Simulación de API:
Para este prototipo, los datos presentados en el dashboard (KPIs, contratos, actividad) son simulados (mock data) y gestionados directamente en el frontend. Esta aproximación fue elegida para:

1- Demostrar la capacidad de la interfaz para consumir y representar datos estructurados, independientemente de su origen.

2- Facilitar el desarrollo y la depuración del frontend sin depender de un backend activo.

3- Preparar la aplicación para una integración futura y directa con una API REST full real, ya que la estructura del código está diseñada para desacoplar la capa de presentación de la capa de datos. Las funciones de filtrado y actualización de la UI están construidas para interactuar con un modelo de datos que puede ser fácilmente reemplazado por llamadas a un servicio de backend.

Aquí tienes el enlace a la página para que puedas probarlo:
https://nexusanalitycs.netlify.app/
