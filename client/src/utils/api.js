
const API_BASE_URL =
process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";


const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
    try {
      const response = await fetch(url, options);
      if (response.status === 204) {
        return null;
      }
      const payload = await response.json();
      if (payload.error) {
        return Promise.reject({ message: payload.error });
      }
      return payload.data;
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error(error.stack);
        throw error;
      }
      return Promise.resolve(onCancel);
    }
  }

  export async function listAntiques(signal) {
    const url = new URL(`${API_BASE_URL}/antiques`);
    return await fetchJson(url, { headers, signal }, []);
  }

  export async function createAntique(antique,signal){
    const url = new URL(`${API_BASE_URL}/antiques/addantique`);
    // const data = antique
    const options = {
      method:'POST',
      headers,
      body:JSON.stringify({data:antique}),
      signal,
    };
    return await fetchJson(url,options)
  }
  export async function deleteAntique(antique,signal){
    const url= new URL(`${API_BASE_URL}/antiques`);
    const options = {
      method:'DELETE',
      headers,
      body:JSON.stringify({data:antique}),
      signal,
    }
    return await fetchJson(url,options)
  }

  export async function findAntique(antiqueId,signal){
const url = `${API_BASE_URL}/antiques/${antiqueId}`;
return await fetchJson(url,{signal});
  }

  export async function updateAntique(antique,signal){
    const url = `${API_BASE_URL}/antiques/${antique.id}`;
    const options = {
      method:"PUT",
      headers,
      body:JSON.stringify({data:antique}),
      signal,
    }
    return await fetchJson(url,options)
  }