import React, { FC } from 'react'
import styled from 'Application/Theme'

const Img = styled.img`
  vertical-align: middle;
  border-style: none;
`

const ImgCompetition = styled(Img)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: auto;
`
export interface ImgCompetitionProps {
  imgPath: string
}
export const ImgCompetitionContainer: FC<ImgCompetitionProps> = ({
  imgPath,
}) => <ImgCompetition src={imgPath} alt={imgPath} />

export default Img
