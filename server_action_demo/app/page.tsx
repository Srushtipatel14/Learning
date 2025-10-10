import { actions } from "./api/all-in-one/route"

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

      {/* create user */}
      <form action={actions.createUser}>
        <input type="text" name="name" className="border p-2" />
        <input type="text" name="email" className="border p-2" />
        <button type="submit" className="border p-2">Create</button>
      </form>

      {/* update user */}
      <form action={actions.updateUser}>
        <input type="text" name="name" className="border p-2" />
        <input type="text" name="id" className="border p-2" />
        <button type="submit" className="border p-2">Update</button>
      </form>

      {/* delete user */}
      <form action={actions.deleteUser}>
        <input type="text" name="id" className="border p-2" />
        <button type="submit" className="border p-2">Delete</button>
      </form>

       <form action={actions.getSelectionUser}>
        <button type="submit" className="border p-2">Delete</button>
      </form>

    </div>
  );
}
