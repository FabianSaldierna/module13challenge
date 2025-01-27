import img_avatar from './img_avatar.png';
import Candidate from '../interfaces/Candidate.interface'
import { useState, useEffect } from 'react';
import { searchGithubUser, searchGithub } from '../api/API';
//const usuario: Candidate[] = await searchGithub();


const CandidateSearch = () => {
  const [arrCandidate, setArrCandidate] = useState<String []>([]);
//  const [candidato, setCandidato] = useState<Candidate>(arregloCandidatos[0]);


  useEffect((): void => {
    const getCandidates = async () => {
      console.log("Entre a obtenerCandidatos");
      let ticketResponseJSON = await searchGithub();
      //console.log(ticketResponseJSON);
      let arreglo: string [] = [];
      ticketResponseJSON.forEach((salida: any) => (
        arreglo.push(salida.login)
      ));
      setArrCandidate(arreglo);
      console.log(arrCandidate);
    }
  /*     for (let i = 0; i < ticketResponseJSON.length; i++) {
        let ticketResponseJSON2 = await searchGithubUser(ticketResponseJSON[i].login);
        console.log(ticketResponseJSON2);
        const newCandidate: Candidate = {
          name: ticketResponseJSON2.login,
          avatar: ticketResponseJSON2.avatar_url,
          username: ticketResponseJSON2.node_id,
          location: ticketResponseJSON2.location,
          email: ticketResponseJSON2.email,
          company: ticketResponseJSON2.company,
          bio: ticketResponseJSON2.bio
        }
        setArrCandidato([...arregloCandidatos, newCandidate]);
      }
      console.log(arregloCandidatos);
    }; */
    getCandidates();
  }, []);
    /*
      const newCandidate: Candidate[] = ticketResponseJSON.map((salida: any) => (  

        {
        name: salida.login,
        avatar: salida.avatar_url,
        username: salida.node_id,
        location: salida.location,
        email: salida.email,
        company: salida.company,
        bio: salida.bio
      } 
     ));
      setArrCandidato(newCandidate);
    };
      obtenerCandidatos();

      console.log(ticketResponseJSON[0].login);
      setArrCandidato(ticketResponseJSON);
      const salida = await searchGithubUser(ticketResponseJSON[0].login);

      const candidateData: Candidate[] = ticketResponseJSON.

       const newCandidate: Candidate  = {
        name: ticketResponseJSON[0].name,
        avatar: salida.avatar_url,
        username: salida.node_id,
        location: salida.location,
        email: salida.email,
        company: salida.company,
        bio: salida.bio
      }
      console.log(salida);
      setCandidato(newCandidate);
      console.log(newCandidate);
      console.log("*******");
      console.log(candidato.avatar); */


  async function nextUser() {
    //console.log(arregloCandidatos);
    console.log("funcion nextUser");
  }

  function nextUserandSave() {
  }

  return (
    <>
      <h1>Candidate Search</h1>
      <div className="card" style={{
        width: "320px", padding: "20px", borderRadius: "25px", border: "2px solid #ffffff"
      }} >
        <img src={img_avatar} alt="Avatar" style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "50%" }} />
        <div className="container">
          <h4><b>John Doe (JuanitoBananas)</b></h4>
          <p>Location:</p>
          <p>Email:</p>
          <p>Company:</p>
          <p>Bio:</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" style={{ backgroundColor: "red", color: "white", padding: "10px 50px" }} onClick={nextUser}>- </button>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <button type="button" style={{ backgroundColor: "green", color: "white", padding: "10px 50px" }} onClick={nextUserandSave}>+ </button>
        </div>
      </div>
    </>
  )
}

export default CandidateSearch;
