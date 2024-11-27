import { IStatus } from "../tasks/types"
interface IProps {
  onChange: (status: string) => void // Function to handle status change
}

export const TaskSelector: React.FC<IProps> = ({ onChange }) => {
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }

  return (
    <>
      <select name="status" id="status" onChange={handleStatusChange}>
        <option value="">All</option>
        {Object.values(IStatus).map(status => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </>
  )
}
