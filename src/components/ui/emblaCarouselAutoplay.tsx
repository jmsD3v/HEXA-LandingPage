import { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

// Define el tipo para el hook useAutoplay, especificando las propiedades que retorna.
type UseAutoplayType = {
  autoplayIsPlaying: boolean; // Estado que indica si la reproducción automática está activa.
  toggleAutoplay: () => void; // Función para alternar el estado de reproducción automática.
  onAutoplayButtonClick: (callback: () => void) => void; // Función para manejar clics en botones relacionados con la reproducción automática.
};

// Hook personalizado para controlar la funcionalidad de reproducción automática en un carrusel Embla.
export const useAutoplay = (
  emblaApi: EmblaCarouselType | undefined, // La instancia de la API de Embla Carousel (puede ser undefined inicialmente).
  playOnInit: boolean = true // Booleano que indica si la reproducción automática debe iniciarse al montar el componente (por defecto es true).
): UseAutoplayType => {
  // Estado local para rastrear si la reproducción automática está actualmente en curso.
  const [autoplayIsPlaying, setAutoplayIsPlaying] = useState(false);

  // Función useCallback para memoizar la función onAutoplayButtonClick.
  // Esto asegura que la función solo se recree si cambia alguna de sus dependencias (en este caso, solo emblaApi).
  const onAutoplayButtonClick = useCallback(
    (callback: () => void) => {
      // Obtiene el plugin de autoplay de la API de Embla.
      const autoplay = emblaApi?.plugins()?.autoplay;
      // Si el plugin de autoplay no está disponible, no hace nada y retorna.
      if (!autoplay) return;

      // Determina si debe detener o resetear la reproducción automática basado en la opción 'stopOnInteraction' del plugin.
      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset // Si stopOnInteraction es false, usa la función reset para reiniciar el temporizador.
          : autoplay.stop; // Si stopOnInteraction es true (o no está definido), usa la función stop para detener la reproducción.

      // Detiene o resetea la reproducción automática.
      resetOrStop();
      // Ejecuta la función de callback proporcionada (útil para realizar acciones adicionales al hacer clic en el botón).
      callback();
    },
    [emblaApi] // La dependencia es emblaApi, por lo que la función se recreará si cambia la instancia de la API.
  );

  // Función useCallback para memoizar la función toggleAutoplay.
  // Esta función se encarga de iniciar o detener la reproducción automática al ser llamada.
  const toggleAutoplay = useCallback(() => {
    // Obtiene el plugin de autoplay de la API de Embla.
    const autoplay = emblaApi?.plugins()?.autoplay;
    // Si el plugin de autoplay no está disponible, no hace nada y retorna.
    if (!autoplay) return;

    // Determina si debe iniciar o detener la reproducción automática basándose en su estado actual.
    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    // Llama a la función play o stop del plugin de autoplay.
    playOrStop();
  }, [emblaApi]); // La dependencia es emblaApi, por lo que la función se recreará si cambia la instancia de la API.

  // Hook useEffect para manejar los efectos secundarios relacionados con la API de Embla y la reproducción automática.
  useEffect(() => {
    // Obtiene el plugin de autoplay de la API de Embla.
    const autoplay = emblaApi?.plugins()?.autoplay;
    // Si el plugin de autoplay no está disponible, no hace nada y retorna.
    if (!autoplay) return;

    // Establece el estado inicial de autoplayIsPlaying basado en si el autoplay está actualmente activo.
    setAutoplayIsPlaying(autoplay.isPlaying());

    // Si playOnInit es true, inicia la reproducción automática al inicializar el componente.
    if (playOnInit) {
      autoplay.play();
    }

    // Agrega listeners a los eventos 'autoplay:play' y 'autoplay:stop' de Embla.
    // Actualiza el estado autoplayIsPlaying cuando estos eventos se emiten.
    emblaApi
      .on('autoplay:play', () => setAutoplayIsPlaying(true))
      .on('autoplay:stop', () => setAutoplayIsPlaying(false))
      // También escucha el evento 'reInit' (cuando el carrusel se reinicializa)
      // y actualiza el estado de autoplayIsPlaying para reflejar el estado actual del autoplay después de la reinicialización.
      .on('reInit', () => setAutoplayIsPlaying(autoplay.isPlaying()));
  }, [emblaApi, playOnInit]); // Las dependencias son emblaApi y playOnInit. El efecto se ejecutará si alguna de estas cambia.

  // Retorna un objeto con el estado y las funciones para controlar la reproducción automática.
  return {
    autoplayIsPlaying, // El estado actual de la reproducción automática.
    toggleAutoplay, // La función para alternar el estado de la reproducción automática.
    onAutoplayButtonClick, // La función para manejar clics en botones relacionados con la reproducción automática.
  };
};
