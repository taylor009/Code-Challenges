select player_id, device_id from (select player_id, device_id, row_number()over
(partition by player_id order by event_date) as row7 from Activity) t
where row7 = 1;