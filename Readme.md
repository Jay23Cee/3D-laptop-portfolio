# JC's Virtual Voyage - 3D Web Portfolio with Vue

JC's Virtual Voyage offers an interactive, immersive experience by presenting a web portfolio on a 3D laptop model. This project, built with Vue, harnesses the power of React Three Fiber (R3F) and Drei to create a cutting-edge design and innovative presentation.

## Key Features:
- **3D Laptop Model**: A detailed 3D model of a laptop to house the interactive web portfolio.
- **Dynamic Lighting**: Uses `<rectAreaLight>` to cast adjustable, colored lighting on the scene.
- **Embedded Webpage**: The laptop screen embeds a webpage via an `<iframe>`, offering an interactive portfolio experience within the 3D environment.
- **Animated Floating Text**: Displays the name "Jackson Cortez" using a custom font with dynamic positioning and orientation.
- **Interactive Controls**: Integrates `<PresentationControls>` for a user-friendly interaction with the 3D scene.

## Code Structure:
- **Initialization**: The 3D laptop model is imported and initialized using the `useGLTF` function from `@react-three/drei`.
- **Lighting**: Incorporates dynamic lighting in the scene using the `<rectAreaLight>` component.
- **3D Objects**:
  - **Laptop Model**: Showcases the imported 3D model via the `<primitive>` component.
  - **Text Label**: Utilizes the `<Text>` component to display a name with a unique font.
- **Interactivity**: Combines the power of `<PresentationControls>` and `<Float>` components to render the scene both interactive and dynamic.
- **Shadows**: Introduces the `<ContactShadows>` component to provide realistic shadows under the 3D objects.

## Dependencies:
- **Vue**: The project leverages Vue's reactive framework for building the UI.
- **React Three Fiber (R3F)**: Employs R3F for 3D rendering and scene creation.
- **Drei**: A collection of handy components for R3F.

## How to Run:
[Include instructions on how to set up and run the project in a Vue context.]

