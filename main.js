/**
 * Arquivo principal de configuração do electron
 */

//importar o electron
const {app, BrowserWindow} = require('electron')

//janela principal
const mainWindow = () => {
    //criando um objeto win (configuraçoes da janela)
    const win = new BrowserWindow({
        width:800,  //largura janela 
        heigth:600,  //altura janela 
        resizable:false, //evitar redimensionamento
        title:"Tutorial Electron",  // mudar o titulo da pagina 
        //autoHideMenuBar:true,  //esconder ou substituir menu
        icon: `${__dirname}/src/public/img/icon.png`
    
    })
    //carregar um documento html na janela
    win.loadFile(`${__dirname}/src/view/index.html`)
}
//criar a janela sobre
const aboutWindow = () => {
    //criando um objeto win (configuraçoes da janela)
    const about = new BrowserWindow({
        width:360,  //largura janela 
        heigth:320,  //altura janela 
        resizable:false, //evitar redimensionamento
        title:"Sobre",  // mudar o titulo da pagina 
        autoHideMenuBar:true,  //esconder ou substituir menu
        icon: `${__dirname}/src/public/img/sobre.png`
    
    })
      //carregar um documento html na janela
      about.loadFile(`${__dirname}/src/view/sobre.html`)
}


//exibir a janela principal
app.whenReady().then(() => {
    mainWindow()
    aboutWindow()
})