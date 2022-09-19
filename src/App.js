import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react';


function App() {   

  // -----------------------------------------------------------------------------------------------------
  // Personaje
  // -----------------------------------------------------------------------------------------------------

  const setNameToPersonaje = (event) => {
    setpersonajeName(event.target.value);
  }

  const setAgeToPersonaje = (event) => {
    setpersonajeAge(event.target.value);
  }

  const setIdToPersonaje = (event) => {
    setpersonajeId(event.target.value);
  }

  const setHeightToPersonaje = (event) => {
    setpersonajeHeight(event.target.value);
  }

  const setGenderToPersonaje = (event) => {
    setpersonajeGender(event.target.value);
  }

  // -------------------------------------------------------------
  // crea un personaje
  // -------------------------------------------------------------
  const createPersonaje = async () => {

        var newPersonaje = {
          id: personajeId,
          name: personajeName,
          age: personajeAge,
          height: personajeHeight,
          gender: personajeGender
      }
      
      const serviceUrl = `http://localhost:8080/personajes`;
      let config = {
          headers: {
                  "Content-Type": "application/json"        
      
          }
      };

      axios.post(serviceUrl,newPersonaje ,config) //then es usando promises, se puede asignar a una variable si quiere sin promises
      .then(response =>  {alert("Agregado con exito") } );

  }

  // -------------------------------------------------------------
  // actualiza un personaje
  // -------------------------------------------------------------
  const updatePersonaje = async () => {

      var newPersonaje = {
          id: personajeId,
          name: personajeName,
          age: personajeAge,
          height: personajeHeight,
          gender: personajeGender
    }
    
    const serviceUrl = `http://localhost:8080/personajes/`;
    let config = {
        headers: {
                "Content-Type": "application/json"        
    
        }
    };

    axios.put(serviceUrl+personajeId,newPersonaje ,config)
    .then(response =>  {alert("Actualizado con exito") } );
  }

  // -------------------------------------------------------------
  // borra un personaje
  // -------------------------------------------------------------
  const deletePersonaje = async () => {
    const serviceUrl = `http://localhost:8080/personajes/`;
    axios.delete(serviceUrl+personajeId)
    .then(response =>  {alert("Borrado con exito") } );
  }

  // -------------------------------------------------------------
  // seleciona todos los personaje
  // -------------------------------------------------------------
  const selectPersonajes = async () => {         
    const serviceUrl = "http://localhost:8080/personajes";
    let config = {
      headers: {
        "Content-Type": "application/json"    
      }
    };
    let response =  await axios.get(serviceUrl,config);

    if(response.data.length > 0){    
      console.log(response.data);
      let personajeslist = response.data.map((item) => {
        return <li key={item.id}> {item.id} - Nombre: {item.name}   -  Edad: {item.age} - Altura: {item.height} - Genero: {item.gender}</li>
      });
      setpersonaje(personajeslist);

    }else{
      setpersonaje(<li>no hay datos</li>);
    }         
  }


  // -----------------------------------------------------------------------------------------------------
  // PLace
  // -----------------------------------------------------------------------------------------------------

   const setIdToPlace = (event) => {
    setplaceId(event.target.value);
  }

  const setNameToPlace = (event) => {
    setplaceName(event.target.value);
  }

  const setTemperatureToPlace = (event) => {
    setplaceTemperature(event.target.value);
  }

  const setSizeToPlace = (event) => {
    setplaceSize(event.target.value);
  }

  // -------------------------------------------------------------
  // crea un lugar
  // -------------------------------------------------------------
  const createPlace = async () => {
        var newPlace = {
          id: placeId,
          name: placeName,
          temperature: placeTemperature,
          sizePlace: placeSize
      }
      
      const serviceUrl = `http://localhost:8080/place`;
      let config = {
          headers: {
                  "Content-Type": "application/json"        
          }
      };

      axios.post(serviceUrl,newPlace ,config)
      .then(response =>  {alert("Agregado con exito") } );

  }

  // -------------------------------------------------------------
  // actualiza un lugar
  // -------------------------------------------------------------
  const updatePlace = async () => {

      var newPlace = {
          name: placeName,
          temperature: placeTemperature,
          sizePlace: placeSize
    }
    
    const serviceUrl = `http://localhost:8080/place/`;
    let config = {
        headers: {
                "Content-Type": "application/json"        
        }
    };

    axios.put(serviceUrl+placeId, newPlace , config)
    .then(response =>  {alert("Actualizado con exito") } );
  }

  // -------------------------------------------------------------
  // borra un lugar
  // -------------------------------------------------------------
  const deletePlace = async () => {
    const serviceUrl = `http://localhost:8080/place/`;
    axios.delete(serviceUrl+placeId)
    .then(response =>  {alert("Borrado con exito") } );
  }

  // -------------------------------------------------------------
  // selecciona todos los lugar
  // -------------------------------------------------------------
    const selectPlaces = async () => {         
      const serviceUrl = "http://localhost:8080/place";
      let config = {
        headers: {
          "Content-Type": "application/json"    
        }
      };
      let response =  await axios.get(serviceUrl,config);

      if(response.data.length > 0){   
        console.log(response.data);
        let placeList = response.data.map((item) => {
          return <li key={item.id}> {item.id} - Nombre: {item.name} - Temperatura: {item.temperature} - Tamaño: {item.sizePlace} </li>
        });

        setplace(placeList);

      }else{
        setplace(<li>No hay datos</li>);
      }         
    }

  // -----------------------------------------------------------------------------------------------------
  // Type
  // -----------------------------------------------------------------------------------------------------

  const setIdToType = (event) => {
    settypeId(event.target.value);
  }

  const setNameToType = (event) => {
    settypeName(event.target.value);
  }

  const setSkinToType = (event) => {
    settypeSkin(event.target.value);
  }

  // -------------------------------------------------------------
  // crea un Type
  // -------------------------------------------------------------
  const createType = async () => {
        var newType = {
          id: typeId,
          name: typeName,
          skin: typeSkin
      }
      
      const serviceUrl = `http://localhost:8080/type`;
      let config = {
          headers: {
                  "Content-Type": "application/json"        
          }
      };

      axios.post(serviceUrl,newType ,config)
      .then(response =>  {alert("Agregado con exito") } );

  }

  // -------------------------------------------------------------
  // actualiza un Type
  // -------------------------------------------------------------
  const updateType = async () => {

      var newType = {
          id: typeId,
          name: typeName,
          skin: typeSkin
    }
    
    const serviceUrl = `http://localhost:8080/type/`;
    let config = {
        headers: {
                "Content-Type": "application/json"        
        }
    };

    axios.put(serviceUrl+typeId, newType , config)
    .then(response =>  {alert("Actualizado con exito") } );
  }

  // -------------------------------------------------------------
  // borra un Type
  // -------------------------------------------------------------
  const deleteType = async () => {
    const serviceUrl = `http://localhost:8080/type/`;
    axios.delete(serviceUrl+typeId)
    .then(response =>  {alert("Borrado con exito") } );
  }

  // -------------------------------------------------------------
  // selecciona todos los Type
  // -------------------------------------------------------------
    const selectTypes = async () => {         
      const serviceUrl = "http://localhost:8080/type";
      let config = {
        headers: {
          "Content-Type": "application/json"    
        }
      };
      let response =  await axios.get(serviceUrl,config);

      if(response.data.length > 0){   
        console.log(response.data);
        let typeList = response.data.map((item) => {
          return <li key={item.id}> {item.id} - Nombre: {item.name} - Color: {item.skin}</li>
        });

        settype(typeList);

      }else{
        settype(<li>No hay datos</li>);
      }         
    }
  
  // -------------------------------------------------------------------------

  const [personajes, setpersonaje] = useState();
  const [personajeId, setpersonajeId] = useState();
  const [personajeName, setpersonajeName] = useState();
  const [personajeAge, setpersonajeAge] = useState();
  const [personajeHeight, setpersonajeHeight] = useState();
  const [personajeGender, setpersonajeGender] = useState();

  const [place, setplace] = useState();
  const [placeId, setplaceId] = useState();
  const [placeName, setplaceName] = useState();
  const [placeTemperature, setplaceTemperature] = useState();
  const [placeSize, setplaceSize] = useState();

  const [type, settype] = useState();
  const [typeId, settypeId] = useState();
  const [typeName, settypeName] = useState();
  const [typeSkin, settypeSkin] = useState();


  // -------------------------------------------------------------------------

  return (
    <div className="App">
      <header className="App-header">


      <div className='portada'>
        <h1 > STAR WARS </h1>

        <img src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/test/5cbeea135cafe88451149213/sw1.jpg"
        height="500"></img>
      </div>


      <div className="personajes">

        <img src="https://i.blogs.es/e33475/cartel-mandalorian-the/1366_2000.jpeg"
        height="300"></img>
        <h1> Personajes </h1>
        <ul> {personajes} </ul>


        <button onClick={selectPersonajes} className="btnPersonaje"> Cargar personajes </button>
        

        <h3> Crear Personaje </h3>
          <label className='labelStyle'>
            ID:   
            <input className='inputsPersonaje' onChange={setIdToPersonaje} type="text"/>
          </label>
          <br></br>
          <label className='labelStyle'>
            Nombre:   
            <input className='inputsPersonaje' onChange={setNameToPersonaje} type="text"/>
          </label >
          <br></br>
          <label className='labelStyle'>
            Edad:   
            <input className='inputsPersonaje' onChange={setAgeToPersonaje} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Altura:   
            <input className='inputsPersonaje' onChange={setHeightToPersonaje} type="text"/>
          </label >
          <br></br>
          <label className='labelStyle'>
            Genero:   
            <input className='inputsPersonaje' onChange={setGenderToPersonaje} type="text" />
          </label>
          
          <br></br> <br></br>
          <button className='btnPersonaje' onClick={createPersonaje}> Guardar Personaje </button>


        <h3> Actualizar Personaje </h3>
        <label className='labelStyle'>
            ID:   
            <input className='inputsPersonaje' onChange={setIdToPersonaje} type="text"/>
          </label>
          <br></br>
          <label className='labelStyle'>
            Nombre:   
            <input className='inputsPersonaje' onChange={setNameToPersonaje} type="text"/>
          </label >
          <br></br>
          <label className='labelStyle'>
            Edad:   
            <input className='inputsPersonaje' onChange={setAgeToPersonaje} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Altura:   
            <input className='inputsPersonaje' onChange={setHeightToPersonaje} type="text"/>
          </label >
          <br></br>
          <label className='labelStyle'>
            Genero:   
            <input className='inputsPersonaje' onChange={setGenderToPersonaje} type="text" />
          </label>
          
          <br></br> <br></br>
          <button className='btnPersonaje' onClick={updatePersonaje}> Actualizar Personaje </button>


        <h3> Borrar Personaje </h3>
          <label className='labelStyle'>
            ID:   
            <input className='inputsPersonaje' className='inputsPersonaje' onChange={setIdToPersonaje} type="text"/>
          </label>
          
          <br></br> <br></br>
          <button className='btnPersonaje' onClick={deletePersonaje}> Borrar Personaje </button>

      </div>
      


      <div className="lugares">
        <img src="https://as01.epimg.net/meristation/imagenes/2022/05/04/betech/1651665958_885563_1651666720_noticia_normal.jpg"
        height="300"></img>

        <h1> Lugares </h1>
          <ul> {place} </ul>
          
        <button onClick={selectPlaces} className="btnPlace"> Cargar lugares </button>     


        <h3> Crear Lugar </h3>
          <label className='labelStyle'>
            ID:   
            <input className='inputsPlace' onChange={setIdToPlace} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Nombre:   
            <input className='inputsPlace' onChange={setNameToPlace} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Temperatura:   
            <input className='inputsPlace' onChange={setTemperatureToPlace} type="text"/>
          </label>
          <br></br>
          <label className='labelStyle'>
            Tamaño:   
            <input className='inputsPlace' onChange={setSizeToPlace} type="text"/>
          </label>
          
          <br></br> <br></br>
          <button className='btnPlace' onClick={createPlace}> Guardar Lugar </button>


        <h3> Actualizar Lugar </h3>
          <label className='labelStyle'>
            ID:   
            <input className='inputsPlace' onChange={setIdToPlace} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Nombre:   
            <input className='inputsPlace' onChange={setNameToPlace} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Temperatura:   
            <input className='inputsPlace' onChange={setTemperatureToPlace} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Tamaño:   
            <input className='inputsPlace' onChange={setSizeToPlace} type="text" />
          </label>
          
          <br></br> <br></br>
          <button className='btnPlace' onClick={updatePlace}> Actualizar Lugar </button>


        <h3> Borrar Lugar </h3>
          <label className='labelStyle'>
            ID:   
            <input className='inputsPlace' onChange={setIdToPlace} type="text" />
          </label>
          
          <br></br> <br></br>
          <button className='btnPlace' onClick={deletePlace}> Borrar Lugar </button> 
      </div>



      <div className="tipos">
        <img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/01/hipertextual-chewbacca-no-recibio-medalla-final-star-wars-nueva-esperanza-2019884119.jpg"
        height="300"></img>
        
        <h1> Tipos </h1>
          <ul> {type} </ul>
          
        <button onClick={selectTypes} className="btnType"> Cargar Tipos </button>     


        <h3> Crear Tipo </h3>
          <label className='labelStyle'>
            ID:   
            <input className='inputsType' onChange={setIdToType} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Nombre:   
            <input className='inputsType' onChange={setNameToType} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Color:   
            <input className='inputsType' onChange={setSkinToType} type="text" />
          </label>
          
          <br></br> <br></br>
          <button className='btnType' onClick={createType}> Guardar Tipo </button>


        <h3> Actualizar Tipo </h3>
          <label className='labelStyle'>
            ID:   
            <input className='inputsType' onChange={setIdToType} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Nombre:   
            <input className='inputsType' onChange={setNameToType} type="text"/>
          </label>
          <br></br>
          <label className='labelStyle'>
            Color:   
            <input className='inputsType' onChange={setSkinToType} type="text" />
          </label>
          
          <br></br> <br></br>
          <button className='btnType' onClick={updateType}> Actualizar Tipo </button>


        <h3> Borrar Tipo </h3>
          <label className='labelStyle'>
            ID:   
            <input className='inputsType' onChange={setIdToType} type="text" />
          </label>
          
          <br></br> <br></br>
          <button className='btnType' onClick={deleteType}> Borrar Tipo </button> 
      </div>



      <div className='divStyle'>
        <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2021/09/mandalorian-2485773.jpg" 
            height="388" ></img>
      </div>

      </header>
    </div>
  );
}

export default App;

