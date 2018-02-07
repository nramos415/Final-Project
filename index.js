const express =require(`express`);
const app = express();
const PORT= process.env.PORT || 3000;

app.use(express.static(__dirname))

app.get(`/`, (req,res) => res.sendFile( __dirname + '/index.html'))

app.get(`/contact`, (req,res) => res.sendFile( __dirname + '/contact.html'))

app.get(`/aboutme`, (req,res) => res.sendFile( __dirname + '/aboutme.html'))

app.listen(PORT, () => console.log(`Application LIVE on http://localhost${PORT}`))
