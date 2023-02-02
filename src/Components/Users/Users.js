import * as React from "react";
import { selectors } from "../../SeletorsData";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = ({ users, setUsers }) => {
  //Get users from the server with axios
  React.useEffect(() => {
    axios
      .get("https://form-backend.vercel.app/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setUsers]);

  // Delete user from the server with axios
  const handleDelete = (id) => {
    axios
      .delete(`https://form-backend.vercel.app/user/${id}`)
      .then((res) => {
        console.log(res.data);
        setUsers(users.filter((user) => user._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Handle Edit User
  const Navigation = useNavigate();
  const handleEdit = (id) => {
    Navigation(`/user/${id}`);
  };

  // Table heading style
  const tableHeadingStyle = {
    fontWeight: "600",
    fontSize: "1rem",
  };
  return (
    <TableContainer sx={{ width: "100%", marginTop: "1rem" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={tableHeadingStyle}>Name</TableCell>
            <TableCell sx={tableHeadingStyle} align="right">
              Email
            </TableCell>
            <TableCell sx={tableHeadingStyle} align="right">
              Sector
            </TableCell>
            <TableCell sx={tableHeadingStyle} align="right">
              Terms
            </TableCell>
            <TableCell sx={tableHeadingStyle} align="center">
              Control
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ fontWeight: "600", fontSize: "0.8rem" }}
              >
                {user.name}
              </TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">
                {
                  selectors.find((selector) => user.sector === selector.value)
                    .text
                }
              </TableCell>
              <TableCell align="right">
                {user.isAgreed ? "Agreed" : "Not Agreed"}
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="outlined"
                  // Use Routing to edit user
                  onClick={() => handleEdit(user._id)}
                  endIcon={<BorderColorRoundedIcon />}
                  sx={{
                    margin: "0 0.5rem",
                    border: "1px solid #fff",
                    backgroundColor: "rgb(0, 171, 85)",
                    color: "#fff",
                    "&:hover": {
                      border: "1px solid rgb(0, 171, 85)",
                      backgroundColor: "#fff",
                      color: "black",
                    },
                    fontWeight: "700",
                    textTransform: "capitalize",
                    fontSize: "0.75rem",
                  }}
                >
                  Edit
                </Button>
                <Button
                  endIcon={<DeleteForeverRoundedIcon />}
                  onClick={() => handleDelete(user._id)}
                  sx={{
                    fontSize: "0.75rem",
                    margin: "0 0.5rem",
                    border: "1px solid #fff",
                    backgroundColor: "rgb(255, 48, 48)",
                    color: "#fff",
                    "&:hover": {
                      border: "1px solid rgb(255, 48, 48)",
                      backgroundColor: "#fff",
                      color: "black",
                    },
                    fontWeight: "700",
                    textTransform: "capitalize",
                  }}
                  variant="outlined"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Users;
