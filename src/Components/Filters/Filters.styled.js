import { Button, DialogContent, Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles'

export const TextFieldGrid = styled(Grid)(() => ({
    paddingInline: '8px',
    paddingBlock: '2px',
    display: 'flex',
    flexDirection: 'column',
  }))
  
  export const TitleGrid = styled(Grid)(() => ({
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  }))

  export const CustomTextField = styled(TextField)(() => ({
    '& .MuiOutlinedInput-root': {
      height: '40px', // Asegúrate de que esto coincida con la altura deseada
      '& input': {
        height: '100%', // Ajusta la altura del input al 100% del contenedor
        padding: '0 14px', // Ajusta el padding según sea necesario
      },
      '& fieldset': {
        border: '1px solid #00000014',
        borderRadius: '6px',
        backgroundColor: 'transparent',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        border: '1.5px solid #00000040',
      },
      '&.Mui-focused fieldset': {
        border: '2px solid #00000040',
      },
      '&.Mui-focused': {
        '& label': {
          color: '#1c7ad4',
        },
      },
    },
  }));

  export const CustomDialogContent = styled(DialogContent)(() => ({
    maxHeight: '450px',
    paddingInline: '16px',
    rowGap: "6px"
  }))

export const ApplyButton = styled(Button)(() => ({
  textTransform: "none !important",
  justifyContent: "space-between",
  borderRadius: "8px !important",
  alignItems: "center",
  display: "flex",
  width: "fit-content",
  minWidth: "fit-content !important",
  padding: "5px 9px !important", // Adding padding here
  color: "#fff !important" ,
  border: "1px solid #00000014 !important",
  background:"linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.04) 99.48%,rgba(0,0,0,.04) 99.49%),#1c7ad4 !important"})) 

  export const ClearButton = styled(Button)(() => ({
    textTransform: "none !important",
    justifyContent: "space-between",
    borderRadius: "8px !important",
    alignItems: "center",
    display: "flex",
    width: "fit-content",
    minWidth: "fit-content !important",
    padding: "5px 9px !important", // Adding padding here
    border: "none",
    background:"transparent !important"})) 