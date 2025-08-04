function fakeApi() {

 return new Promise((resolve) => {

     const callBack = () => resolve("Juninho");

     setTimeout(callBack,500)

 })



}

export default fakeApi ;


