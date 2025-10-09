import { actions } from "./api/all-in-one/route"
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <form action={actions.createUser} className=" d-flex gap-2" >
        <input type="text" name="name" className="border p-2" required />
        <input type="text" name="email" className="border p-2" required />
        <button type="submit" className="border p-2">Create</button>
      </form>

      <form action={actions.updateUser} className=" d-flex gap-2" >
        <input type="text" name="name" className="border p-2" required />
        <input type="text" name="id" className="border p-2" required />
        <button type="submit" className="border p-2">Update</button>
      </form>

      <form action={actions.deleteUser} className=" d-flex gap-2" >
        <input type="text" name="id" className="border p-2" required />
        <button type="submit" className="border p-2">Delete</button>
      </form>

    </div>
  );
}
