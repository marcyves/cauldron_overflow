<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

class CommentController extends AbstractController
{
    /**
     * @Route("/comment/{id}/vote/{direction}")
     */
    public function commentVote($id, $direction)
    {
        if ($direction === 'up') {
            $currentVoteCount = rand(7, 100);
        } else {
            $currentVoteCount = rand(0, 5);
        }

//        return new $this->json(['votes' => $currentVoteCount]);
        return new JsonResponse(['votes' => $currentVoteCount]);
    }
}