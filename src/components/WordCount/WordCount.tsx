import React, { useState } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { MainLayout } from '../../components/MainLayout';
import { Box, Stack } from '@mui/material';
import { Button } from 'common';
import { headerHeight } from '../../styles/StyledVariables';
import { MuiTable } from "../../common/Table"
import { Data } from "types/Types";

interface Count {
    [key: string]: number
}

export const WordCount: React.FC = () => {
    const [text, setText] = useState('');
    const [frequency, setFrequency] = useState<Data[] | null>(null);

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.target.value;
        setText(text);
    }
    const handleButtonClick = () => {
        const words = text.split(' ');
        const wordsCount = words.reduce((accum: Count, currentValue: string) => {

            if (currentValue) {
                if (accum[currentValue]) {

                    accum[currentValue]++;
                }
                else {
                    accum[currentValue] = 1;
                }
            }

            return accum;


        }, {});

        const formatCounts = Object.entries(wordsCount).map((value) => {
            return formatData(...value);
        })

        setFrequency(formatCounts);

    }
    const formatData = (
        word: string,
        count: number,

    ): Data => {
        return {
            word,
            count,
        };
    }

    const clear = () => {
        setText('');
        setFrequency(null);
    }


    return (
        <MainLayout>
            <Stack spacing={2} direction="column" justifyContent="center" sx={{ height: `calc(100vh - ${headerHeight})` }}
                alignItems="center">

                <Box >
                    <TextareaAutosize
                        minRows={8}
                        aria-label="maximum height"
                        onChange={(e) => handleTextAreaChange(e)}
                        placeholder="Please enter text here"
                        style={{ width: 750 }}
                        value={text}
                    />

                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '750px' }}>
                    <Button onClick={handleButtonClick}>Count Words</Button>
                    {text && <Button kind="outlined" onClick={clear}>Clear</Button>}
                </Box>
                {frequency && <MuiTable rows={frequency} />}

            </Stack>



        </MainLayout>
    )
}
