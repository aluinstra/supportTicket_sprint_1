<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TicketResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'titel' => $this->titel,
            'created_by'=> $this->created_by,
            'details' => $this->details,
            'appointed_to'=>$this->appointed_to,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}