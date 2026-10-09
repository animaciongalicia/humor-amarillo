// Fotos publicadas en la web. SOLO las importadas aquí se incluyen (optimizadas) en el sitio.
// Las demás de src/assets/photos NO se publican. Para usar una nueva: importarla aquí y llamarla por su clave.
import gladiadoresBarna from '../assets/photos/gladiadores-barna.jpg';
import img1788 from '../assets/photos/IMG-1788.JPG';
import paredPunos from '../assets/photos/pared-obstaculos-punos.jpeg';
import telarana from '../assets/photos/telarana-765.jpg';
import puente from '../assets/photos/puente-colgante-612.jpg';
import sumos from '../assets/photos/sumos-batalla.jpg';
import bolas from '../assets/photos/bolas-gigantes.jpg';
import drag1 from '../assets/photos/_MG_9499.jpg';
import drag2 from '../assets/photos/_MG_7062.jpg';
import fiesta1 from '../assets/photos/3-slide-local-despedidas-2.JPG';
import fiesta2 from '../assets/photos/14-slide-local-despedidas.JPG';
import fiesta3 from '../assets/photos/12-slide-local-despedidas-3.JPG';
import segway from '../assets/photos/segway-torre-de-hercules.jpg';
import mariaPita from '../assets/photos/coruna-ayuntamiento-maria-pita.jpg';
import torre from '../assets/photos/0viajes-por-galicia.jpg';
import gladiadores2 from '../assets/photos/gladiadores-43665.JPG';
import puerto from '../assets/photos/1ventana-atlantico-viajes-galicia.jpg';

export const photos: Record<string, ImageMetadata> = {
  'gladiadores-barna': gladiadoresBarna,
  'IMG-1788': img1788,
  'pared-obstaculos-punos': paredPunos,
  'telarana-765': telarana,
  'puente-colgante-612': puente,
  'sumos-batalla': sumos,
  'bolas-gigantes': bolas,
  '_MG_9499': drag1,
  '_MG_7062': drag2,
  '3-slide-local-despedidas-2': fiesta1,
  '14-slide-local-despedidas': fiesta2,
  '12-slide-local-despedidas-3': fiesta3,
  'segway-torre-de-hercules': segway,
  'coruna-ayuntamiento-maria-pita': mariaPita,
  '0viajes-por-galicia': torre,
  '1ventana-atlantico-viajes-galicia': puerto,
  'gladiadores-43665': gladiadores2,
};
