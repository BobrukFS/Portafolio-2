import React, { useRef, useEffect } from 'react';

const Card = React.forwardRef((props, ref) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (cardRef.current) {
        // Notifica al componente padre sobre el cambio de tamaño de la Card
        props.onResize(cardRef.current.offsetHeight);
      }
    };

    handleResize(); // Llama a la función al inicio para ajustar la altura inicial

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [props]);

  return (
    <>
      <div className="card" ref={cardRef}>
        <img
          src="https://cdn.dribbble.com/users/1997192/screenshots/16889373/media/1df5752a4ef20aeb77c8d2695931c0c1.png"
          alt=""
          className="card__img"
        />
      </div>
    </>
  );
});

export default Card; 