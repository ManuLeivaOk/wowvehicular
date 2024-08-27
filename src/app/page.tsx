"use client";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import Footer from "@/components/Footer";
import Image from "next/image";
import Services from "@/components/Services";

export default function Home() {
  const navItems = [
    { label: "Inicio", icon: "pi pi-fw pi-home" },
    {
      label: "Trabajos",
      icon: "pi pi-fw pi-images",
      command: () => scrollToSection("projects"),
    },
    {
      label: "Contacto",
      icon: "pi pi-fw pi-envelope",
      command: () => scrollToSection("contact"),
    },
    {
      label: "Ubicación",
      icon: "pi pi-fw pi-map-marker",
      command: () => scrollToSection("location"),
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const mapContainerStyle = {
    width: "100%",
    height: "320px",
  };

  const center = {
    lat: -34.397,
    lng: 150.644,
  };

  const end = (
    <h1 style={{ color: "white", marginRight: 28 }}>Wow Vehicular</h1>
  );

  return (
    <div className="p-component p-m-3">
      {/* Header */}
      <Menubar model={navItems} className="transparent-menubar" end={end} />

      {/* Hero Section */}
      <div id="hero" className="hero p-p-4 p-text-center">
        <Image
          src={"/wow.webp"}
          alt="logo"
          width={300}
          height={80}
          className="h-auto"
        />
        <p className="">
          Descubre nuestros trabajos más recientes y contacta con nosotros para
          más información.
        </p>
        <Button
          label="Ver Trabajos"
          icon="pi pi-arrow-down"
          className="p-button-raised p-button-success"
          onClick={() => scrollToSection("projects")}
        />
      </div>

      {/* Galeria de Proyectos */}

      <div id="projects" className="projects p-p-4 px-4 py-8 md:p-8">
        <h2 className="text-center mb-8">Nuestros Trabajos</h2>
        <div className="masonry-grid">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.name}
              subTitle={project.description}
              header={
                <img
                  alt={project.name}
                  src={project.image}
                  style={{ width: "100%", cursor: "pointer" }}
                  onClick={() => (window.location.href = `/trabajo/dodge-ram`)}
                />
              }
            ></Card>
          ))}
        </div>
      </div>

      <Services />
      {/* Formulario de Contacto */}
      <div id="contact" className="contact p-p-4 mb-8">
        <div className="flex ">
          <h2 className="w-6 px-4 lg:px-8">Contacto</h2>
          <h2 className="w-6 px-4 lg:px-8 hidden md:block">Ubicación</h2>
        </div>

        <div className="flex flex-column md:flex-row justify-content-center">
          <div className="p-fluid md:w-6 px-4 lg:px-8 mt-5">
            <div className="p-field mt-2">
              <label htmlFor="name">Nombre</label>
              <InputText id="name" />
            </div>
            <div className="p-field mt-2">
              <label htmlFor="email">Email</label>
              <InputText id="email" />
            </div>
            <div className="p-field mt-2">
              <label htmlFor="message">Mensaje</label>
              <InputTextarea id="message" rows={5} />
            </div>
            <Button
              label="Enviar"
              icon="pi pi-send"
              className="p-button-success"
            />
          </div>

          <div id="location" className="location md:w-6 px-4 lg:px-8">
            <h2 className="w-6 md:px-8 md:hidden block">Ubicación</h2>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.4787110302777!2d-64.25370862353834!3d-31.345766592842484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329f554591b61b%3A0x554bb92b2aa8c6de!2sWOW%20Vehicular!5e0!3m2!1ses!2sar!4v1724769105030!5m2!1ses!2sar"
              width="100%"
              height="320"
              style={{ border: 0, borderRadius: 10 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const projects = [
  {
    name: "Proyecto 1",
    description: "Descripción del proyecto 1",
    image: "/trabajos/ram1.webp",
  },
  {
    name: "Proyecto 2",
    description: "Descripción del proyecto 2",
    image: "/trabajos/ram2.webp",
  },
  {
    name: "Proyecto 3",
    description: "Descripción del proyecto 3",
    image: "/trabajos/ram3.webp",
  },
  {
    name: "Proyecto 4",
    description: "Descripción del proyecto 3",
    image: "/trabajos/ram4.webp",
  },
];

const projectTemplate = (project) => {
  return (
    <Card
      title={project.name}
      subTitle={project.description}
      header={
        <img alt={project.name} src={project.image} style={{ width: "100%" }} />
      }
    ></Card>
  );
};
