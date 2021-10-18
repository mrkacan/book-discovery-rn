const ApiConstants = {
  API_URL: 'http://104.248.26.141:3000/api',
  AUTHORIZE:'/auth/login',
  REGISTER: '/auth/register',
  BOOKS: '/books',
  BOOK_DETAIL: (id: string) => `/books/${id}`,
};

export default ApiConstants;
