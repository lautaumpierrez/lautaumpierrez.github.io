const diplomas = [
  {
    title: 'NodeJS básico',
    image: require('../assets/diplomas/nodejs-basic.png'),
  },
  {
    title: 'ExpressJS',
    image: require('../assets/diplomas/expressjs.png')
  },
  {
    title: 'VueJS Avanzado',
    image: require('../assets/diplomas/vuejs-professional.png')
  },
  {
    title: 'React Avanzado - PWA\'\s',
    image: require('../assets/diplomas/react-pwas.png')
  }
]

export const getDiplomas = ()=>{
  return new Promise((resolve, reject)=>{
    if(diplomas.length > 0) resolve(diplomas);
    else reject({message: 'dont have diplomas', error: true});
  });
}
