




const Signup = () => {

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className='border shadow p-6 w-80 bg-white rounded-lg'>
        <h2 className='text-2xl font-bold mb-4 text-gray-800'>SignUp</h2>

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700' htmlFor="name">Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter Name' className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400'/>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700' htmlFor="email">Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400'/>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700' htmlFor="password">Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='*****' className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400'/>
          </div>

          <button type='submit' className='w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700'>
            Signup
          </button>
        </form>

        <p className='text-center text-gray-700 mt-2'>Already Have an Account? <a href="" className='text-teal-600 font-semibold hover:underline'>Login</a></p>
      </div>
    </div>
  );
}

export default Signup;
