export const getById = async (baseURL: string, id: string | number) => {
   const API_URL = process.env.API_URL;

   try {
      const res = await fetch(`${API_URL}${baseURL}/${id}`, {
         cache: 'no-store',
      });

      if (!res.ok) {
         throw new Error('Failed to fetch topic');
      }

      return res.json();
   } catch (error) {
      console.error(error);
   }
};

export const FetchDataForEditPage = async (apiUrl: string, id: string) => {
   if (id === 'new') {
      return { _id: 'new' };
   }

   const data = await getById(apiUrl, id);
   return data?.document || {};
};

const slugify = (title: string) =>
   title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');

export const postLinkGenerator = (_id: string, title: string) =>
   `/posts/${_id}/${slugify(title)}`;
