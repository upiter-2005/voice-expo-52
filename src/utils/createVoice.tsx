import * as FileSystem from "expo-file-system"

const API_BASE_URL = "https://api.sws.speechify.com/v1/voices"
const API_KEY = "br07KB4pkrCemerCivaRdQgWIGW_EckZjVC55p_YXT4="

export const createVoice = async(name: string, filePath: string) => {

	const sampleFile = await FileSystem.readAsStringAsync(filePath, {encoding: 'base64'});



    
    //data:audio/mpeg;name=donald-duck-wishes-a-merry-christmas-83287.mp3;base64,
    //console.log(sampleFile)

    //const blob = `data:audio/mpeg;name=${name};base64,${sampleFile}`

    

    //  const fl = new Blob(['Hello, world!'], {type: 'text/plain' })
    //  console.log(fl)
     
	// const formData = new FormData();
	// formData.append("name", name);
    // formData.append("sample", blob);
	// formData.append("consent", '{"fullName": "ricky","email": "herrmannoliver862@gmail.com"}');


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////c
    // try {
    //     const response = await FileSystem.uploadAsync(`${API_BASE_URL}`, filePath, {
    //         headers: {
    //             Accept: '*/*',
    //             'content-type': 'multipart/form-data',
	// 	        Authorization: `Bearer ${API_KEY}`,
    //         },
    //       fieldName: 'sample',
    //       httpMethod: 'POST',
    //       uploadType: FileSystem.FileSystemUploadType.BINARY_CONTENT,
    //     //   parameters: {
    //     //     name,
    //     //     consent: '{"fullName": "ricky","email": "herrmannoliver862@gmail.com"}'
    //     //   }
    //     });
    //     console.log(JSON.stringify(response, null, 4));
    //   } catch (error) {
    //     console.log(error);
    //   }
	


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




	// const res = await fetch(`${API_BASE_URL}/v1/voices`, {
	// 	method: "POST",
	// 	body: formData,
	// 	headers: {
    //         accept: '*/*',
    //         'content-type': 'multipart/form-data',
	// 		Authorization: `Bearer ${API_KEY}`,
	// 	},
	// });
    // const options = {
    //     method: 'POST',
    //     headers: {accept: '*/*', Authorization: `Bearer ${API_KEY}`},
    //     body: formData
    //   };
      

      
    //   fetch('https://api.sws.speechify.com/v1/voices', options)
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    //     .catch(err => console.error(err));
	    
      

	// const responseData = await res.json();
    // console.log(res.json())
	// return responseData;
}


