/** @format */

async function handler() {
  try {
    const res = await fetch("http://localhost:3000/api/getCurrentCourses");
    const ans = await res.json();
    return ans[0];
  } catch (e) {
    console.log(e);
  }
}
export async function CurrentSemCourses({}) {
  const courses = await handler();
  return (
    <>
      <h1 className='text-3xl p-5'>Curresnt Semester</h1>
      <table className='table-fixed w-auto ml-20 mr-20'>
        <thead className='border-b border-slate-600'>
          <tr>
            <th className='border-r border-slate-600 p-2'>Course Code</th>
            <th className='border-r border-slate-600 p-2'>Course Title</th>
            <th className='border-r border-slate-600 p-2'>Type</th>
            <th className='border-r border-slate-600 p-2'>Atempts</th>
            <th className='border-r-0 border-slate-600 p-2'>Credits</th>
          </tr>
        </thead>
        <tbody className='text-justify'>
          {courses["subjects"].map((e, i) => {
            return (
              <tr key={i}>
                <td className='border-r border-slate-600 p-2'>
                  {e.courseCode}
                </td>
                <td className='border-r border-slate-600 p-2'>
                  {e.courseName}
                </td>
                {e.electedCourse ? (
                  <td className='border-r border-slate-600 p-2 text-green-600 font-bold text-lg'>
                    {e.type}
                  </td>
                ) : (
                  <td className='border-r border-slate-600 p-2'> {e.type}</td>
                )}
                <td className='border-r border-slate-600 p-2'>{e.attempt}</td>
                <td className='border-r-0 border-slate-600 p-2'>{e.credits}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
