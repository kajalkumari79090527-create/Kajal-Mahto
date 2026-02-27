import React from 'react'

const Knowmore = () => {
  return (
    <>
    <div class="max-w-4xl max-sm:max-w-lg mx-auto p-6 mt-6 bg-amber-300">
      <div class="text-center mb-12 sm:mb-16">
        <a href="javascript:void(0)"><img
          src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-44 inline-block' />
        </a>
        <h4 class="text-slate-600 text-base mt-6">Student details</h4>
      </div>

      <form>
        <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">First Name</label>
            <input name="name" type="text" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter first name" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Last Name</label>
            <input name="lname" type="text" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter last name" />
          </div>
          <div>
             <label class="text-slate-900 text-sm font-medium mb-2 block">Father's name</label>
            <input name="name" type="text" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter father's name" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Mother's name</label>
            <input name="lname" type="text" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter mother's name" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Email Id</label>
            <input name="email" type="text" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Mobile No.</label>
            <input name="number" type="number" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter mobile number" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Password</label>
            <input name="password" type="password" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Confirm Password</label>
            <input name="cpassword" type="password" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter confirm password" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Address</label>
            <input name="address" type="address" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter your address" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">student roll no</label>
            <input name="text" type="text" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter roll no" />
          </div>
        </div>

        
        
      </form>
    </div>
    </>
  )
}

export default Knowmore