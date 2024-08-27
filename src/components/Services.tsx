import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="surface-0 text-center py-8 px-4">
      <div className="mb-3 font-bold text-3xl mb-8">
        <span className="text-900">
          ¿Qué es <span className="text-green-300 ">PPF?</span>
        </span>
      </div>
      <div className="grid">
        <div className="col-12 md:col-4 mb-4 px-5">
          <Image
            src={"/ppf.webp"}
            alt="ppf"
            width={200}
            height={200}
            className="mb-3 border-round-xl image-cover"
          />
          <div className="text-900 text-xl mb-3 font-medium">
            ¿Qué es <span className="text-green-300">PPF?</span>
          </div>
          <span className="text-700 line-height-3">
            EI PAINT PROTECTION FILM o PPF es una película transparente
            termoplástica de poliuretano que se aplica sobre la barniz y
            pintura, cromados y black piano del automóvil, protegiéndolo contra:
            rayaduras, arañazos, golpes, contacto frecuente con el conductor,
            suciedad, restos de insectos, marcas de lavado y otros elementos
            ambientales.
          </span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <Image
            src={"/marca.webp"}
            alt="ppf"
            width={200}
            height={200}
            className="mb-3 border-round-xl image-cover"
          />
          <div className="text-900 text-xl mb-3 font-medium">
            PPF de la marca <span className="text-green-300">GARWARE</span>
          </div>
          <span className="text-700 line-height-0	">
            <p className="my-1">Autoregeneración a partir de los 25*</p>
            <p className="my-1">Resistencia altoimpacto</p>
            <p className="my-1">Brillo extremo</p>
            <p className="my-1">Antiamarilleo</p>
            <p className="my-1">Hidrofobia (extrema repelencia)</p>
            <p className="my-1">Absoluta calidad y protección</p>
          </span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <Image
            src={"/corte.webp"}
            alt="ppf"
            width={200}
            height={200}
            className="mb-3 border-round-xl image-cover"
          />
          <div className="text-900 text-xl mb-3 font-medium">
            Software <span className="text-green-300">Garvare-Cut</span>
          </div>
          <span className="text-700 line-height-3">
            Contamos con tecnología de precorte con el software Garvare-Cut,
            donde encontramos todos los vehículos con dimenciones exactas, de
            esta manera logramos la perfeccion en cada mode instalado.
          </span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <Image
            src={"/cuatro.webp"}
            alt="ppf"
            width={200}
            height={200}
            className="mb-3 border-round-xl image-cover"
          />
          <div className="text-900 text-xl mb-3 font-medium">
            ¿Qué debo buscar en un <span className="text-green-300">PPF</span>?
          </div>
          <span className="text-700 line-height-3">
            <p className="my-1 line-height-0">
              Buen aspecto con claridad óptica y brillo de calidad
            </p>
            <p className="my-1 line-height-0">
              Que no presente piel de naranja ni texturas
            </p>
            <p className="my-1 line-height-0">Garantía de durabilidad</p>
            <p className="my-1 line-height-0">
              Autoregeneración ó capacidad ante los arañazos de recuperar la
              posición inicial
            </p>
          </span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <Image
            src={"/quinto.webp"}
            alt="ppf"
            width={200}
            height={200}
            className="mb-3 border-round-xl image-cover"
          />

          <div className="text-900 text-xl mb-3 font-medium">
            Protección{" "}
            <span className="text-green-300">total, parcial o sectorizada</span>
          </div>
          <span className="text-700 line-height-3">
            <p className="my-1 line-height-0">Filos de puertas</p>
            <p className="my-1 line-height-0">Interior de manijas</p>
            <p className="my-1 line-height-0">Ópticas</p>
            <p className="my-1 line-height-0">Antichip en guardabarros</p>
            <p className="my-1 line-height-0">Zocalos</p>
            <p className="my-1 line-height-0">
              Black piano de interior y exterior
            </p>
          </span>
        </div>
        <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
          <Image
            src={"/sexto.webp"}
            alt="ppf"
            width={200}
            height={200}
            className="mb-3 border-round-xl image-cover"
          />
          <div className="text-900 text-xl mb-3 font-medium">
            Garantía oficial de<span className="text-green-300"> GARWARE</span>
          </div>
          <span className="text-700 line-height-3">
            En cada vehículo completo o parcial front se le entrega al cliente
            su garantía oficial de GARWARE donde se encontrará un código QR para
            posteriormente cargar sus datos y quedar registrado en la base de
            datos.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
