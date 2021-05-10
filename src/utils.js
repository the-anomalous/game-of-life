export const cloneArray = array => {
  const newArr = JSON.parse(JSON.stringify(array))
  return newArr;
}

export const play = (grid, rows, cols) => {
  let g = grid;
  let g2 = cloneArray(grid)

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let neighbors = 0;
      if (i > 0)
        if (g[i - 1][j]) neighbors++;
      if (i > 0 && j > 0)
        if (g[i - 1][j - 1]) neighbors++;
      if (i > 0 && j < cols - 1)
        if (g[i - 1][j + 1]) neighbors++;
      if (j < cols - 1)
        if (g[i][j + 1]) neighbors++;
      if (j > 0)
        if (g[i][j - 1]) neighbors++;
      if (i < rows - 1)
        if (g[i + 1][j]) neighbors++;
      if (i < rows - 1 && j > 0)
        if (g[i + 1][j - 1]) neighbors++;
      if (i < rows - 1 && j < cols - 1)
        if (g[i + 1][j + 1]) neighbors++;
      if (g[i][j] && (neighbors < 2 || neighbors > 3)) g2[i][j] = false;
      if (!g[i][j] && neighbors === 3) g2[i][j] = true;
    }
  }

  return g2;
}