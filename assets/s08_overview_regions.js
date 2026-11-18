// Cycling-step regions on assets/s08_overview_fig3.png (paper Fig. 3, fig_overview_v29u.pdf).
// Coordinates are normalised [x0, y0, x1, y1] of that PNG (x by width, y by height).
// 'rects' = parts of the step (highlight holes; round 2c: step 4 also owns the field header line and the
// Gradients arrowhead, so steps may now overlap). 'badge' = [cx, cy] centre of an ink-free spot for the step number;
// radius = badge_radius_w * image width (48 px on the slide). 'panel' = the light-grey panel (#F3F4F6),
// [x0, y0, x1, y1] plus corner radius panel_radius_w * width, measured on the PNG.
window.S08_OVERVIEW_REGIONS = {
 "image": "assets/s08_overview_fig3.png",
 "size_px": [2750, 1159],
 "badge_radius_w": 0.013636,
 "panel": [0.0022, 0.3175, 0.9978, 0.9948],
 "panel_radius_w": 0.0116,
 "panel_color": "#F3F4F6",
 "steps": [
  {"step": 1, "rects": [[0.0029, 0.0, 0.6938, 0.3072]], "badge": [0.1687, 0.069]},
  {"step": 2, "rects": [[0.0189, 0.3313, 0.5251, 0.9733], [0.5251, 0.3313, 0.6876, 0.4021], [0.5913, 0.3072, 0.6015, 0.3313]], "badge": [0.0255, 0.3581]},
  {"step": 3, "rects": [[0.5251, 0.4021, 0.7069, 0.9733], [0.7069, 0.4021, 0.8007, 0.8559]], "badge": [0.5491, 0.44]},
  {"step": 4, "rects": [[0.8007, 0.4021, 0.9985, 0.8559], [0.7469, 0.8559, 0.9789, 0.9646], [0.7185, 0.0, 0.9985, 0.4021], [0.6876, 0.3279, 0.7185, 0.4021], [0.0145, 0.3279, 0.72, 0.4072]], "badge": [0.9807, 0.4288]}
 ]
};
