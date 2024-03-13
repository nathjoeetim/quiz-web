import styled from "styled-components";

function FotterComponent() {
  return <FotterMainContainer className="w-full p-3 "></FotterMainContainer>;
}

export default FotterComponent;

const FotterMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
