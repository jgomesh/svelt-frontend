  import backEndpoints from './backEndpoints';
  import axios, { AxiosResponse } from 'axios';

  const addImage = async (formData: FormData): Promise<string | undefined> => {
    const token: string | null = localStorage.getItem('token');

    if (!formData || !token) {
      return 'There is something wrong with your login';
    }

    const config = {
      headers: {
        'Content-Type': `multipart/form-data;`
      },
    };

    try {
      const response: AxiosResponse = await axios.post(
        backEndpoints['add_image'],
        formData,
        config,
      );

      return response.data;
    } catch (error: any) {
      console.log(error.message);
      return 'Error adding image' + error.message;
    }
  };

  export default addImage;