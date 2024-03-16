import Student from "./Student";

function Content() {
    const data = [
        {
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          name: "John Doe",
          email: "john.doe@example.com"
        },
        {
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          name: "Jane Smith",
          email: "jane.smith@example.com"
        },
        {
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          name: "Michael Johnson",
          email: "michael.johnson@example.com"
        },
        {
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          name: "Emily Brown",
          email: "emily.brown@example.com"
        },
        {
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          name: "William Wilson",
          email: "william.wilson@example.com"
        }
      ];
      
      
  return (
    <div className="grid">
      {data.map(student => {
        return <Student key={student.name} student={student} />
      })}
    </div>
  )
}

export default Content
