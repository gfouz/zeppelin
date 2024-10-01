import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

const WhatsAppButton = () => {
  const phoneNumber = '+1234567890'; // Número de teléfono con el código de país
  const message = 'Hola, me gustaría hablar contigo';
  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // Esto abrirá WhatsApp en una nueva pestaña o aplicación
  };

  return (
    <Button
      showAnchorIcon
      as={Link}
      size='md'
      color='danger'
      className='mt-4'
      onPress={handleWhatsAppClick}
    >
      Reserva Ahora!
    </Button>
  );
};

export default WhatsAppButton;
